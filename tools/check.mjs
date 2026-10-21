import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const config=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const baseline=JSON.parse(fs.readFileSync(path.join(root,'docs/migration/before.json'),'utf8'));
const resolve=(route)=>{
 for(const rewrite of config.rewrites||[]){if(rewrite.source.endsWith(':path*')){const prefix=rewrite.source.slice(0,-6);if(route.startsWith(prefix))route=rewrite.destination.replace(':path*',route.slice(prefix.length));}else if(route===rewrite.source)route=rewrite.destination;}
 let file=path.join(root,route);if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');return file;
};
for(const page of baseline){
 const html=fs.readFileSync(resolve(page.route),'utf8');
 assert.match(html,/<meta\s+name="robots"\s+content="noindex, nofollow"/);
 assert.match(html,/<html[^>]+lang="es"/);assert.match(html,/<h1\b/);
 assert(!html.includes('/_next/'),'Framework resource remains');
 for(const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  if(script[1].includes('application/ld+json'))JSON.parse(script[2]);
  else assert.match(script[1],/src="\/assets\/js\/site.js"/);
 }
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const value=match[1];if(/^(https?:|mailto:|tel:|data:|\/\/)/.test(value))continue;
  const url=new URL(value,'https://example.test'+page.route);const target=resolve(decodeURIComponent(url.pathname));assert(fs.existsSync(target),page.route+' missing '+value);
  if(url.hash&&target.endsWith('.html'))assert(fs.readFileSync(target,'utf8').includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),'Missing anchor '+value);
 }
}
const css=fs.readFileSync(path.join(root,'assets/css/site.css'),'utf8');
assert(!/@import|@tailwind|@apply|@theme/.test(css),'CSS requires compilation');
for(const match of css.matchAll(/url\((\/[^)]+)\)/g))assert(fs.existsSync(resolve(match[1])),'Missing CSS resource '+match[1]);
assert.equal(config.framework,null);assert.equal(config.buildCommand,'');
assert(!fs.existsSync(path.join(root,'node_modules')),'Dependencies still present');
assert(!fs.existsSync(path.join(root,'.next')),'Old build still present');
console.log(`${baseline.length} pages: resources, links, anchors, JSON-LD, noindex and static configuration verified.`);
