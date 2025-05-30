import { ReactNode } from "react";

interface WrapperProps {
	className?: string;
	children:ReactNode;
	style?: React.CSSProperties
}

export default function Wrapper({ className, children, style }:WrapperProps) {
	return <div className={`section_wrapper ${className}`} style={style}>{children}</div>
}