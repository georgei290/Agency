import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
	overflow-x: auto;

	thead {
		background-color: black;
		color: white;
	}
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	overflow-x: scroll;

	tbody > tr:nth-child(odd) {
		background-color: #fafafc;
	}
`;

const Th = styled.th`
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
`;

const Td = styled.td`
	padding: 8px;
	text-align: left;
	border-right: 1px solid #ddd;
	white-space: pre-wrap;
	word-wrap: break-word;

	&:last-child {
		border-right: none;
	}
`;

const TableComp = ({data}) => {
	console.log('here', data);
	const datas = [
		{
			column1: "https://www.seoreviewtools.com/seo-content-editor",
			column2: "Data 1",
			column3: "Value 1",
			column4: "value4",
			column5:
				"SEO Content Editor \u2013 Keyword research and Content analysis made simple",
		},
		{
			column1: "Row 2",
			column2: "Data 2",
			column3: "Value 2",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		{
			column1: "Row 3",
			column2: "Data 3",
			column3: "Value 3",
			column4: "value4",
			column5: "value5",
		},
		// Add more data items as needed
	];
	return (
		<Container>
			<Wrapper>
				<TableContainer>
					<Table>
						<thead>
							<tr>
								<Th>Title</Th>
								<Th>Rank</Th>
								<Th>Type </Th>
								<Th>
									domain
								
								</Th>
								<Th>Description</Th>
							</tr>
						</thead>
						<tbody>
							{data?.map((item, index) => (
								<tr key={index}>
									<Td>{item?.title}</Td>
									<Td>{item?.rank_group}</Td>
									<Td>{item.type}</Td>
									<Td>{item.domain}</Td>
									<Td>{item.description}</Td>
								</tr>
							))}
						</tbody>
					</Table>
				</TableContainer>
			</Wrapper>
		</Container>
	);
};

export default TableComp;

const TableTitle = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;
	margin-bottom: 10px;

	border-radius: 5px;
	align-items: center;
	span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #ae67fa;
	}
`;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
	font-family: Montserrat;
`;
const Input2 = styled.div`
	height: 35px;
	width: 98%;
	background-color: white;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 3px;
	height: 32px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 2px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: 600;
	font-size: 12px;

	:disabled {
		background-color: silver;
		cursor: not-allowed;
	}
`;

const Main = styled.div`
	width: 100%;
	margin-top: 10px;
	margin-right: 40px;
`;

const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const Wrapper = styled.div`
	/* margin-left: 30px; */
	/* margin-top: 30px; */
	width: 100%;
`;

const Container = styled.div`
	width: 100%;

	display: flex;
	/* overflow: hidden; */

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: white;
	/* margin-top: 60px; */

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
