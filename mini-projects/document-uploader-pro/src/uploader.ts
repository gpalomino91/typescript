// uploader.ts

// Aquí construiremos la lógica del DocumentUploaderPro
// incluyendo Queue, Set y posiblemente Stack para el historial.

export class DocumentUploader {
    // - La cola de documentos (Queue)
    // - El Set para evitar duplicados
  
    private queue: { title: string; content: string }[];
    private uploadedTitles: Set<string>;
    private history: string[];
  
    constructor() {
      this.queue = [];
      this.uploadedTitles = new Set();
      this.history = [];
    }
  
    enqueueDocument(title: string, content: string): void {
      // Lógica para encolar documento si no está duplicado
      if (this.uploadedTitles.has(title)){
        console.log(`Documento duplicado ignorado: ${title}`);
        return;
      }
  
      this.queue.push({title, content});
      this.uploadedTitles.add(title);
    }
  
    processNextDocument(): void {
      // Lógica para procesar el documento en la cabeza de la cola
      
      if (this.queue.length !== 0) {
        const doc = this.queue.shift();
        if(doc) {
            this.history.push(doc.title);
            console.log(`📄 Documento procesado: ${doc?.title}`);
        }
      } else {
      console.log('⚠️ No hay documentos para procesar.');
      }
    }
  
    hasBeenUploaded(title: string): boolean {
      // Verifica si ya se ha subido un documento con este título
      return this.uploadedTitles.has(title);
    }
  
    getUploadHistory(): string[] {
      // Devuelve un historial de títulos subidos (si usamos stack)
      return this.history;
    }
  }
  