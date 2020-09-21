import styled from "styled-components";

export const Container = styled.div`
	background-color: hsl(225, 6%, 25%);
	height: 50vh;
	display: flex;

	& .collapsed {
		flex-grow: 0;

		& .CodeMirror-scroll {
      position: absolute;
      width: -webkit-fill-available;
		}
	}
`;

export const Wrapper = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	background: hsl(225, 6%, 25%);
`;

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	background: hsl(225, 6%, 13%);
	color: #fff;
	padding: 0.5rem;
	padding-left: 1rem;
	border-radius: 0.5rem 0.5rem 0 0;

	& .MuiButtonBase-root {
		transform: rotate(90deg);
		color: #fff;
		padding: 0 12px;

		& .MuiTouchRipple-root {
			display: none;
		}
	}
`;

export const Btn = styled.button``;

export const Controller = styled.div`
	flex-grow: 1;
	border-radius: 0 0 0.5rem 0.5rem;
	overflow: hidden;
	background: red;

	& .react-codemirror2 {
		height: 100%;

		& .CodeMirror {
			height: 100% !important;

			& .CodeMirror-vscrollbar {
				&::-webkit-scrollbar {
					width: 5px;
				}

				/* Track */
				&::-webkit-scrollbar-track {
					border-radius: 10px;
				}

				/* Handle */
				&::-webkit-scrollbar-thumb {
					background: #666b7a;
					border-radius: 10px;
				}
			}
		}
	}
`;
