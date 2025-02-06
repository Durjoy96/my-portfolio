const Label = ({ text }) => {
  return (
    <>
      <span className="py-1 px-5 rounded-full bg-primary/10 border border-primary/80 text-base-content text-sm font-medium cursor-default">
        {text}
      </span>
    </>
  );
};

export default Label;
