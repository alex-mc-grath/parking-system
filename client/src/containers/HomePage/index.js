import Body from '../../components/theme/Body';
import SearchBar from './SearchBar';
import useStateLoader from '../../components/useStateLoader';
import { searchDatabase, searchForLinkedDocuments } from './actions';
import PersonalFile from './PersonFile';
import VehicleFile from './VehicleFile';
import Columns from '../../components/theme/layout/Columns';
import Container from '../../components/theme/layout/Container';
import CenterContainer from '../../components/theme/layout/CenterContainer'
import Thumbnmail from '../../components/theme/graphics/Thumbnail'

import {useEffect, useState} from 'react';

import image1 from '../../img/individual/1.jpeg'
import image2 from '../../img/individual/2.jpeg'
import image3 from '../../img/individual/3.jpeg'

export default function HomePage() {
  const [linkedDocuments, getLinkedDocuments, LinkedDocumentsLoader] = useStateLoader({ action: searchForLinkedDocuments });
  const [searchResult, loadSearch, SearchLoader] = useStateLoader({ action: searchDatabase, callback: getLinkedDocuments });
  const [searching, setSearching] = useState(false);

  const [displayText, setDisplayText] = useState(false)

  const activateDisplayText = () => {

setTimeout(()=>{
  setDisplayText(true)

  

}, 1000)

setTimeout(()=>{
  setDisplayText(false)
}, 8000 )
  }

  

  const searchFunction = (query) => {
    setSearching(true);
    loadSearch(query);
  }

  let images = [image1, image2, image3]

  useEffect(()=> activateDisplayText(), [])

  return (
    <Body>
      {displayText && <h3 style={{width:'70%', textAlign:'center', position:'absolute'}}>This live project has been refactored to a parking system for demo purposes.<br/> To give it a try, type the permit numbers '30001', '30002' and '30003' and press enter.</h3>}
      {(searchResult || searching) && 
        <>
        <SearchBar searchValue={''} searchFunction={searchFunction} />
        <SearchLoader>
          <Container>
            <Columns
              baseKey='searchGrid'
              layout={[
                //column 1
                <>
                  {searchResult?.type === 'individual' && <PersonalFile individualData={searchResult.data} images={images} edit={false} />}
                  {searchResult?.type === 'vehicle' && <VehicleFile vehicleData={searchResult.data} edit={false} />}
                  {searchResult?.type === null && <p style={{color: "rgb(255,8,7)"}}>No individual has been found.</p>}
                </>,
                //column 2
                <LinkedDocumentsLoader>
                  {searchResult?.type === 'individual' && linkedDocuments?.map((vehicleData) => <VehicleFile  images={images} key={vehicleData._id} vehicleData={vehicleData} />)}
                  {searchResult?.type === 'vehicle' && linkedDocuments?.map((individualData) => <PersonalFile key={individualData._id} individualData={individualData} />)}
                </LinkedDocumentsLoader>,
              ]}
            />
          </Container>
        </SearchLoader>
        </>
      }
      {(searchResult === null && !searching) && 
        <>
          <CenterContainer settings={{height: "calc(80vh - 75px)", width: "50%", "maxWidth":"85%"}}>
            <center>
              <Thumbnmail  src="/images/parking-space.jpg" options={{width:"400px", borderRadius: "15px"}}/>
            </center>
            <div style={{marginTop: "1rem"}}>
              <SearchBar searchValue={''} searchFunction={searchFunction}/>
            </div>
          </CenterContainer>
        </>
      }
    </Body>
  );
}
