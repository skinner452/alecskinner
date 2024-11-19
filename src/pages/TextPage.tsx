type Props = {
  text: string;
};

const TextPage = ({ text }: Props) => {
  return (
    <div className="container max-w-3xl m-auto">
      <p className="text-7xl text-center">{text}</p>
    </div>
  );
};

export default TextPage;
