import Link from "next/link";
import { collectionsData, CollectionItem } from "../../collections";
import CollectionDetail, { Product } from "./CollectionDetail";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-");
}

function buildCollectionSlug(item: CollectionItem): string {
  return slugify(`${item.collection}-${item.color}`);
}

function mapToProduct(item: CollectionItem): Product {
  return {
    id: `${item.collection}-${item.color}`,
    collection: item.collection,
    name: item.collection,
    colour: item.color,
    designNo: String(item.designNo),
    technique: item.quality,
    contents: item.contents,
    stockReference: item.stockRef,
    madeIn: item.madeIn,
    image: item.imageSrc,
    description: "",
    madeToOrder: true,
  };
}

export async function generateStaticParams() {
  return collectionsData.map((item) => ({
    title: buildCollectionSlug(item),
  }));
}

interface PageProps {
  params: Promise<{ title: string }>;
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { title } = await params;
  const item = collectionsData.find(
    (collection) => buildCollectionSlug(collection) === title
  );

  if (!item) {
    return (
      <main className="min-h-screen bg-[#fafaf8] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-[#202629] mb-4">
            Collection not found
          </h1>
          <p className="text-[#686864] mb-8">
            The collection or product you are looking for does not exist.
          </p>
          <Link
            href="/collection/collections_list"
            className="inline-flex min-h-[53px] items-center justify-center bg-[#20292c] px-7 text-[13px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#333d40]"
          >
            Back to Collections
          </Link>
        </div>
      </main>
    );
  }

  return <CollectionDetail product={mapToProduct(item)} />;
}
