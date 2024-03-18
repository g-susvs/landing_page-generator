'use client'
import { useUiStore, useGeneratePageStore } from "@/store";

export const TopMenu = () => {
  const html = useGeneratePageStore((state) => state.html);
  const setPageHtml = useGeneratePageStore((state) => state.setPageHtml);
  const editedTemplate = useGeneratePageStore((state) => state.editedTemplate);
  const toggleShowPreview = useUiStore((state) => state.toggleShowPreview);

  async function exportLandingPage() {
    try {
      const body = {
        template: html
      };
      const resp = await fetch("http://localhost:3001/api/landing/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const fileBlob = await resp.blob();
      const urlFile = window.URL.createObjectURL(fileBlob); // enlace temporal para descargar el archivo

      const linkDownload = document.createElement("a");
      linkDownload.href = urlFile;
      linkDownload.setAttribute("download", "landing.html");
      document.body.appendChild(linkDownload);

      linkDownload.click(); // iniciar la descarga
      linkDownload.remove(); // Eliminar el enlace después de la descarga
    } catch (error) {
      console.log(error);
    }
  };

  async function setPreview() {
    if (editedTemplate === html) {
      toggleShowPreview();
      return;
    }

    try {
      const resp = await fetch("http://localhost:3001/api/landing/edit-template", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          template: editedTemplate
        })
      })

      if (!resp.ok) {
        const error = await resp.json()
        console.log(error)
        return
      }

      const json = await resp.json();
      setPageHtml(editedTemplate)
    } catch (error) {
      console.log(error)
    }

    toggleShowPreview()
  }

  return (
    <section className="flex gap-4">
      <button className="btn" onClick={setPreview}>
        PREVIEW
      </button>
      <button className="btn" onClick={() => toggleShowPreview()}>
        CODE
      </button>
      <button className="btn" disabled={!html} onClick={exportLandingPage}>
        EXPORT
      </button>
    </section>
  );
};
