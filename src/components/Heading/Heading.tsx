export interface HeadingProps {
  text: string;
  size?: number;
  lineHeight?: string | number;
  color?: string;
}
export const Heading: React.FC<HeadingProps> = ({ text, size, lineHeight, color }) => {
  return (
    <h2
      className="text-[#4C62C5] font-semibold font-manrope md:text-[36px] text-[34px]"
      style={{ fontSize: size, lineHeight: lineHeight, color: color }}
    >
      {text}
    </h2>
  );
};
