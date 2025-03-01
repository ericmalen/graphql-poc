export default function GraphiQL() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <iframe src="http://localhost:4000/graphql" width="87%" height="87%" />
    </div>
  );
}
