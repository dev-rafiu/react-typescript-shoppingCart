function Skeleton() {
  return (
    <>
      <ul className="grid gap-4 grid-cols-4">
        {Array(20)
          .fill(null)
          .map((_, idx) => {
            return (
              <li
                className="h-48 w-full animate-pulse bg-gray-300 grid-cols-[repeat(auto-fit, minmax(400px, 1fr))] rounded"
                key={idx}
              ></li>
            );
          })}
      </ul>
    </>
  );
}

export default Skeleton;
