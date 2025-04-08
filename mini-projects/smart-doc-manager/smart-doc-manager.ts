/*
# Smart Document Manager (TypeScript)

This is an advanced document management tool built in TypeScript. 
It simulates real-world logic by combining multiple data structures and algorithms in a single project.

*/

interface Document {
  id: number;
  title: string;
  content: string;
  tag: string;
}


class DocumentManager {
  public documents: Document[] = [];
  public id: number = 1;
  public stack: Document[] = [];
  public root: FolderNode | null = null;
  
  constructor(params) {}

  addDocument(title: string, content: string, tag: string): string {
    const addedDoc: Document = {
      id: this.id,
      title: title,
      content: content,
      tag: tag,
    }
    this.id++;
    this.documents.push(addedDoc);
    return "Added document";
  }

  searchByTitle(title: string): Document | string {
    this.documents.sort((s1, s2) => s1.title.localeCompare(s2.title));
    let start = 0;
    let end = this.documents.length - 1;
    while(start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (this.documents[middle].title.localeCompare(title) === 0) {
        return this.documents[middle];
      } else if (this.documents[middle].title.localeCompare(title) < 0) {
        start = middle +1;
      } else {
        end = middle - 1;
      }
    }
    return "No encontrado";
  }

  filterDocuments(tag: string): Document[] | string {
    let filterDoc = this.documents.filter(doc => doc.tag.includes(tag));
    if(filterDoc.length === 0) {
      return "No hay coincidencias";
    }
    return filterDoc;
  }

  openDocument(id: number): Document | string {
    let openDoc = this.documents.find(doc => doc.id === id);
    if (openDoc === undefined) {
      return "Documento no encontrado";
    }
    this.stack.push(openDoc);
    return openDoc;
  }

  addToFolderTree(folderName: string, document: Document) {
    if (this.root === null) {
      let newDoc = new FolderNode(folderName);
      newDoc.documents.push(document);
      this.root = newDoc;
    } else {
      let current = this.root;
      while(true){
        if (current.name.localeCompare(folderName) === 0) {
          current.documents.push(document);
          return;
        } else if (current.name.localeCompare(folderName) < 0) {
          if(current.right === null) {
            current.right = new FolderNode(folderName);
            current.right.documents.push(document);
            return;
          } else {
            current = current.right;
          }
          } else {
            if (current.left === null) {
            current.left = new FolderNode(folderName);
            current.left.documents.push(document);
            return;
          } else {
            current = current.left;
          }
        }
      }
    }
      
   }

  getMostAccessedDocuments(): Map<number, number> | string {
    if (this.stack.length === 0) {
      return "No hay documentos abiertos";
    }

    let accessedDoc = new Map<number, number>();
    
    for (let i = 0; i < this.stack.length; i++) {
      const docId = this.stack[i].id; 
      if (!accessedDoc.has(docId)) {
        accessedDoc.set(docId, 1);
      } else {
        accessedDoc.set(docId, accessedDoc.get(docId)! + 1);
      }
    }
    return accessedDoc;
  }
}

class FolderNode {
  constructor (
    public name: string, 
    public documents: Document[] = [], 
    public left: FolderNode | null = null,
    public right: FolderNode | null = null
  ) {}
}
