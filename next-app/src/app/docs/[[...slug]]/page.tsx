export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    console.log("from 2", params);
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    console.log("from 1", params);
    return <h1>Viewing docs for feature {params.slug}</h1>;
  }
  return <h1>Docs home page</h1>;
}
