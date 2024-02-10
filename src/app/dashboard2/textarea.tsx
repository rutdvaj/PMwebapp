import { Button } from "@/components/ui/button";
import { ButtonDemo } from "../dashboard1/meeting";
import { Textarea } from "@/components/ui/textarea";
import { Value } from "@radix-ui/react-select";

interface TextareaDemoProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  // Add other necessary props for styling
}

export const CommentButton = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Button className="font--poppins text-[20px] text-white bg-verydark font-regular p-8 rounded-[34px] text-center w-[135px] ml-5">
        {props.children}
      </Button>
    </>
  );
};

const TextareaDemo: React.FC<TextareaDemoProps> = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      className="your-custom-class"
      placeholder="Type Your thoughts here.."
    />
  );
};

{
  /* <div className="buttons flex flex-row justify-between">
  <div className="submit-button">
    <CommentButton>Submit</CommentButton>
  </div>
  <div className="cancel-button">
    <CommentButton>Cancel</CommentButton>
  </div>
</div> */
}
export default TextareaDemo;
