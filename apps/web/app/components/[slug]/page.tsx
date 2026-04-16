export default function ComponentSlugPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Component: {params.slug}</h1>
    </div>
  );
}
