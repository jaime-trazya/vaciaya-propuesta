export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={inverse ? "wordmark wordmark-inverse" : "wordmark"}>
      <span>
        vacía
        <span className="wordmark-ya">
          ya<span className="wordmark-dot">.</span>
        </span>
      </span>
      <span className="wordmark-caption">UN SERVICIO DE ANJA</span>
    </span>
  );
}
