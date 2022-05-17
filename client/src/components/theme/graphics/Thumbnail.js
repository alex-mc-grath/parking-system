import styled from 'styled-components'

const StyledImage = styled.img`
    ${({options}) => {
        
        return `
            vertical-align: text-top;
            margin: 0.2rem;
            width: ${options.width || "150px" };
            min-width: ${options.minWidth || "150px"};
            max-width: ${options.maxWidth || "100%"};
            border-radius: ${options.borderRadius || "7.5px"}; 
        `;
    }}
`;

const Thumbnail = ({src, options = {}}) => {
    return (
        <StyledImage src={src} options={options}/>
    )
}

export default Thumbnail