declare module "pdfjs-dist/build/pdf" {
  export const GlobalWorkerOptions: any;
  export function getDocument(source: any): any;
}

declare module "pdfjs-dist/build/pdf.worker" {
  const worker: any;
  export default worker;
}
