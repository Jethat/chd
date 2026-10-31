export const SHIP_FREE_ABOVE = 500;
export const SHIP_FLAT = 40;

export const money = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
export const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isMobile = (v: string) => /^[6-9]\d{9}$/.test(v);
export const isPin = (v: string) => /^\d{6}$/.test(v);
export const isUpi = (v: string) => /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v);
export const luhn = (num: string) => {
  const d = num.replace(/\D/g, "");
  if (d.length < 13) return false;
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    let n = +d[d.length - 1 - i];
    if (i % 2) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
  }
  return sum % 10 === 0;
};

export const wrap = (t: string, n = 88) =>
  t.split(" ").reduce<string[]>((a, w) => {
    const l = a[a.length - 1];
    if (l !== undefined && (l + " " + w).length <= n) a[a.length - 1] = l + " " + w;
    else a.push(w);
    return a;
  }, []);

/** Tiny dependency-free PDF writer (Latin text only). Used for sample chapters. */
export function makeSamplePdf(title: string, lines: string[]) {
  const esc = (s: string) => s.replace(/[\\()]/g, "\\$&").replace(/[^\x20-\x7E]/g, "?");
  let y = 780;
  const ops = [`BT /F1 18 Tf 50 ${y} Td (${esc(title)}) Tj ET`];
  y -= 36;
  for (const l of lines) { ops.push(`BT /F1 11 Tf 50 ${y} Td (${esc(l)}) Tj ET`); y -= 18; }
  const stream = ops.join("\n");
  const objs = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];
  let pdf = "%PDF-1.4\n";
  const offs: number[] = [];
  objs.forEach((o, i) => { offs.push(pdf.length); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
  const xref = pdf.length;
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

export function download(blob: Blob, name: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export const toCsv = (rows: (string | number)[][]) =>
  rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\r\n");
/** UTF-8 CSV with BOM so Excel opens Hindi text correctly. */
export const downloadCsv = (name: string, rows: (string | number)[][]) =>
  download(new Blob(["\ufeff" + toCsv(rows)], { type: "text/csv;charset=utf-8" }), name);
/** Shrinks an uploaded image to a small JPEG data-URL so it fits in localStorage. */
export const resizeImage = (file: File, max = 420) =>
  new Promise<string>((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
      res(c.toDataURL("image/jpeg", 0.8));
    };
    img.onerror = () => rej(new Error("Not a valid image"));
    img.src = URL.createObjectURL(file);
  });