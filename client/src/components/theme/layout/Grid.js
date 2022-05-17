import styled from 'styled-components/macro';

const StyledGrid = styled.div`

    display:inline-block;
    padding: ${({layout}) => layout.padding || "0.1rem"};

    & > div {
        display: grid;
        grid-template-columns: ${({layout:{columns = 2}}) => {
            let toReturn = "auto";
            for(let i=1; i<columns;i++)
            {
                toReturn += " auto";
            }
            return toReturn;
        }};
        gap: ${({layout}) => layout.gap || "0px"};
    }
`

//layout: columns=2, cells
const Grid = ({layout, baseKey}) => {
    return (
        <StyledGrid layout={layout}>
            <div>
                {layout.cells?.map((cell,index) => <div key={baseKey+"_"+index}>{cell}</div> )}
            </div>
        </StyledGrid>
    )
}

export default Grid