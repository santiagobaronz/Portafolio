import Gallery from "@/components/gallery/Gallery"

export const metadata = {
  title: "Galería - Santiago Baron Zuleta",
};

export default function GalleryPage() {
  return (
    <div>
      <div className="max-w-2xl mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-white line-hight-fixed">
          Galería
        </h1>
        <p className="mt-6 text-base text-black-300">
          A lo largo del tiempo, he tenido la oportunidad de capturar momentos únicos, lugares especiales y detalles
          que me llaman la atención. En la galería se encuentran una selección de mis fotografías y momentos favoritos que
          me gustaría compartir con mis visitantes.
        </p>
      </div>

      <div className="max-w-full mb-20">
        <Gallery></Gallery>
      </div>
    </div>
  )
}