export default function Page({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div>{photoId}</div>;
}
