type Props = {
  name: string;
  image: string;
};

const TopSkill = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-grow">
        <img className="my-auto" src={props.image} alt={`${props.name} Logo`} />
      </div>
      <p className="text-center text-2xl font-semibold text-gray-200">
        {props.name}
      </p>
    </div>
  );
};

export default TopSkill;
