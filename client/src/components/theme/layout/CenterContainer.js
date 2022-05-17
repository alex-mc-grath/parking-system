import styled from 'styled-components/macro';

const Wrapper = styled.div`
    display:table;
    width:${({settings}) => settings.width || "100%"};
    max-width:${({settings}) => settings.maxWidth || "100%"};
    min-width:${({settings}) => settings.minWidth || "300px"};
    margin: 0 auto;

    & > div {
        display: table-cell;
        vertical-align: middle;
        ${({settings}) => settings.height ? 'height:'+settings.height+';' : ''}
    }
`;

const CenterContainer = ({settings = {}, children}) => {
    return (
        <Wrapper settings={settings}>
            <div>
                {children}
            </div>
        </Wrapper>
    );

}

export default CenterContainer;