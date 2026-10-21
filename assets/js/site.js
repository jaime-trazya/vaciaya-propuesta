/* Local demonstration only: no requests, persistence, logging or personal-data transmission. */
'use strict';

const menuButton = document.querySelector('header button[aria-controls]');
if (menuButton) {
  const menu = document.getElementById(menuButton.getAttribute('aria-controls'));
  const closedIcon = menuButton.innerHTML;
  const setOpen = (open) => {
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuButton.innerHTML = open ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg>' : closedIcon;
  };
  menuButton.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) { setOpen(false); menuButton.focus(); }
  });
  matchMedia('(min-width: 1024px)').addEventListener('change', (event) => { if (event.matches) setOpen(false); });
}

function today() {
  const date = new Date();
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

document.querySelectorAll('form[data-brand]').forEach((form) => {
  const brand = form.dataset.brand;
  const steps = [...form.querySelectorAll('[data-step]')];
  const advance = form.querySelector('[data-advance]');
  const back = form.querySelector('[data-back]');
  const fields = [...form.querySelectorAll('input,select,textarea')];
  const heading = form.querySelector('h3[tabindex],h2,h3');
  const status = document.createElement('div');
  status.className = 'demo-result'; status.hidden = true; status.tabIndex = -1;
  status.setAttribute('role', 'status');
  const message = document.createElement('p');
  message.textContent = 'Demostración completada. No se ha enviado, guardado ni compartido ningún dato. No recibirás ningún presupuesto por esta simulación.';
  const reset = document.createElement('button'); reset.type = 'button'; reset.textContent = 'Probar de nuevo';
  status.append(message, reset); form.after(status);
  let step = 0;
  const get = (name) => fields.find((field) => field.name === name);
  const value = (name) => String(new FormData(form).get(name) || '').trim();
  const required = brand === 'guardaloya' ? ['servicio','ubicacion','fecha','duracion','volumenTipo','volumenCantidad','nombre','telefono','email','consentimiento'] : brand === 'transportaya' ? ['servicio','origen','destino','fecha','volumen','descripcion','nombre','telefono','email','consentimiento'] : [];
  fields.filter(field => required.includes(field.name)).forEach(field => field.required = true);
  const announce = document.createElement('p'); announce.className = 'sr-only'; announce.setAttribute('aria-live', 'polite'); form.append(announce);
  fields.filter(field => field.type === 'date').forEach(field => field.min = today());
  fields.forEach((field, i) => { field.id ||= `${form.id}-field-${i}`; });

  function errorFor(field) {
    const name = field.name; const text = value(name);
    if (name === 'consentimiento') return field.checked ? '' : 'Acepta el tratamiento de datos para completar la demostración.';
    if (name === 'tipos') return new FormData(form).getAll('tipos').length ? '' : 'Selecciona al menos un tipo de mueble.';
    if ((field.required || ['servicio','tipo','inmueble'].includes(name)) && !text) return 'Completa este campo.';
    if (!text) return '';
    if (['origen','destino','ubicacion','localidad'].includes(name)) {
      if (/^\d+$/.test(text) && !/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(text)) return 'Introduce un código postal válido de cinco cifras.';
      if (text.length < 2 || !/[\p{L}\d]/u.test(text)) return 'Indica una localidad o código postal válido.';
    }
    if (name === 'nombre' && text.length < 2) return 'Escribe tu nombre (al menos dos caracteres).';
    if (name === 'descripcion' && brand === 'transportaya' && text.length < 10) return 'Describe los objetos con al menos 10 caracteres.';
    if (field.type === 'date' && text < today()) return 'La fecha no puede ser anterior a hoy.';
    if (name === 'telefono') {
      const phone = text.replace(/[\s.()\-]/g, '');
      const valid = ['guardaloya','mudateya','transportaya'].includes(brand) ? /^(\+34|0034)?[6789]\d{8}$/.test(phone) : /^\+?\d{9,15}$/.test(phone);
      if (!valid) return 'Introduce un teléfono válido.';
    }
    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(text)) return 'Introduce un correo electrónico válido.';
    if (field.type === 'number') {
      const decimal = name === 'volumenCantidad' && value('volumenTipo') === 'm2';
      const number = Number(text);
      if (!Number.isFinite(number) || number <= 0 || (!decimal && !Number.isInteger(number)) || (field.max && number > Number(field.max))) return 'Introduce una cantidad válida mayor que cero.';
    }
    if (field.maxLength > 0 && text.length > field.maxLength) return `Máximo ${field.maxLength} caracteres.`;
    if (!field.validity.valid && field.validity.typeMismatch) return 'Revisa el formato de este dato.';
    return '';
  }
  function clear(field) {
    const id = field.id + '-validation';
    document.getElementById(id)?.remove();
    field.removeAttribute('aria-invalid');
    const described = (field.getAttribute('aria-describedby') || '').split(' ').filter(item => item && item !== id).join(' ');
    if (described) field.setAttribute('aria-describedby', described); else field.removeAttribute('aria-describedby');
  }
  function showError(field, text) {
    clear(field); if (!text) return;
    const error = document.createElement('p'); error.id = field.id + '-validation'; error.className = 'field-error'; error.textContent = text;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', [field.getAttribute('aria-describedby'), error.id].filter(Boolean).join(' '));
    const container = field.closest('.form-field,.field,.consent-field,.choice-group') || field.parentElement;
    container.append(error);
  }
  function validate(activeOnly = true) {
    const checked = new Set(); let first;
    for (const field of fields) {
      if (activeOnly && field.closest('[data-step]')?.hidden) continue;
      if (checked.has(field.name)) continue; checked.add(field.name);
      const error = errorFor(field); showError(field, error);
      if (error && !first) first = field;
    }
    if (first) { const panel=first.closest('[data-step]'); if(panel?.hidden)setStep(Number(panel.dataset.step),false); first.focus(); announce.textContent = 'Revisa los campos indicados para continuar.'; return false; }
    announce.textContent = ''; return true;
  }
  function setStep(next, focus = true) {
    step = next;
    steps.forEach((panel, i) => panel.hidden = i !== step);
    if (back) back.hidden = step === 0;
    const progress = form.querySelector('.form-progress');
    if (progress) {
      const items = [...progress.children].filter(e => e.tagName !== 'I');
      items.forEach((item, i) => {
        item.classList.toggle('active', i === step); item.classList.toggle('complete', i < step); item.classList.toggle('done', i < step);
        if (i === step) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current');
        if (brand === 'transportaya') {
          item.classList.toggle('text-primary', i <= step); item.classList.toggle('text-muted-foreground', i > step);
          const marker=item.querySelector('span');marker?.classList.toggle('bg-primary',i<=step);marker?.classList.toggle('text-white',i<=step);marker?.classList.toggle('bg-muted',i>step);
        }
      });
      progress.setAttribute('aria-label', `Paso ${step + 1} de ${steps.length}`);
    }
    const summary = form.querySelector('.request-summary p');
    if (summary) summary.textContent = `${value('servicio')} · ${value('numero')} mueble(s) · ${value('localidad')}`;
    const footnote=form.querySelector('.form-footnote');
    if (footnote?.firstChild?.nodeType===Node.TEXT_NODE)footnote.firstChild.textContent=step===0?'Siguiente: tus datos de contacto.':'Simulación: no se tramitará ninguna solicitud.';
    if (focus) { const target = heading || steps[step]; target?.setAttribute('tabindex', '-1'); target?.focus(); announce.textContent = `Paso ${step + 1} de ${steps.length}`; }
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault(); if (!validate()) return;
    if (step < steps.length - 1) { setStep(step + 1); return; }
    if (!validate(false)) return;
    form.reset(); fields.forEach(clear); form.hidden = true; status.hidden = false; status.focus();
  });
  back?.addEventListener('click', () => setStep(Math.max(0, step - 1)));
  form.querySelector('.request-summary button')?.addEventListener('click', () => setStep(0));
  reset.addEventListener('click', () => { status.hidden = true; form.hidden = false; form.reset(); fields.forEach(clear); setStep(0, false); fields[0]?.focus(); });
  form.addEventListener('reset', () => { fields.forEach(clear); setStep(0, false); });
  for (const field of fields) {
    field.addEventListener('input', () => { clear(field); status.hidden = true; });
    field.addEventListener('change', () => fields.filter(f => f.name === field.name).forEach(clear));
    if (field.type !== 'checkbox' && field.type !== 'radio') field.addEventListener('blur', () => showError(field, errorFor(field)));
  }
  form.querySelector('[aria-label="Intercambiar origen y destino"]')?.addEventListener('click', () => {
    const origin = get('origen'); const destination = get('destino');
    [origin.value, destination.value] = [destination.value, origin.value]; clear(origin); clear(destination); announce.textContent = 'Origen y destino intercambiados.';
  });
  const comments = get('comentarios'); const counter = form.querySelector('.character-count');
  if (comments && counter) comments.addEventListener('input', () => counter.textContent = `${comments.value.length}/${comments.maxLength}`);
  get('volumenTipo')?.addEventListener('change', () => {
    const quantity = get('volumenCantidad'); quantity.step = value('volumenTipo') === 'm2' ? '0.1' : '1'; clear(quantity);
  });
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); }
  }), {threshold: 0.08});
  document.querySelectorAll('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top > innerHeight) { element.classList.add('reveal-pending'); observer.observe(element); }
  });
}
