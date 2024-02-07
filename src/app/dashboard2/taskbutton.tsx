import { Button } from "@/components/ui/button";

type buttonProps = {
  children: string;
};

const Buttontask: React.FC<buttonProps> = ({ children }) => {
  return (
    <Button className="font--poppins text-[20px] text-white bg-verydark font-regular p-8 rounded-[34px] text-center">
      {children}
    </Button>
  );
};

export default Buttontask;
