// Local preview only. Production serves files directly, without a Node runtime.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const config=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.ico':'image/x-icon','.xml':'application/xml','.txt':'text/plain'};
const port=Number(process.argv[2]||8080);
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');let route=decodeURIComponent(url.pathname);
 for(const group of config.headers||[])for(const header of group.headers)res.setHeader(header.key,header.value);
 if(route!=='/'&&route.endsWith('/')){res.writeHead(308,{Location:route.slice(0,-1)+url.search});res.end();return;}
 for(const rewrite of config.rewrites||[]){if(rewrite.source.endsWith(':path*')){const prefix=rewrite.source.slice(0,-6);if(route.startsWith(prefix))route=rewrite.destination.replace(':path*',route.slice(prefix.length));}else if(route===rewrite.source)route=rewrite.destination;}
 let file=path.join(root,route);
 if(!file.startsWith(root+path.sep)||route.split('/').some(s=>s.startsWith('.'))){res.writeHead(403);res.end();return;}
 if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
 if(!fs.existsSync(file)&&!path.extname(file))file=path.join(file,'index.html');
 if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.statusCode=404;file=path.join(root,'404.html');}
 res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
}).listen(port,'127.0.0.1',()=>console.log(`Preview: http://127.0.0.1:${port}`));
