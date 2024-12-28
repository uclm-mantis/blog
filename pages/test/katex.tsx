import 'katex/dist/katex.min.css';
import katex from 'katex';

export default function TestPage() {
  const formula = katex.renderToString('E = mc^2', {
    throwOnError: false,
  });

  return (
    <div>
      <h1>Prueba de KaTeX</h1>
      <div dangerouslySetInnerHTML={{ __html: formula }} />
    </div>
  );
}
