import F24_P1 from '../assets/ArtLibrary/F24_P1.png'
import F24_P2 from '../assets/ArtLibrary/F24_P2.png'
import F24_P2_1 from '../assets/ArtLibrary/F24_P2_1.png'
import F24_P3 from '../assets/ArtLibrary/F24_P3.png'
import F24_P3_1 from '../assets/ArtLibrary/F24_P3.1.png'
import S24_P2_1 from '../assets/ArtLibrary/S24_P2_1.png'
import S24_P2_2 from '../assets/ArtLibrary/S24_P2_2.png'
import S24_P2_3 from '../assets/ArtLibrary/S24_P2_3.png'
import S24_P3_1 from '../assets/ArtLibrary/S24_P3_1.png'
import S24_P3_2 from '../assets/ArtLibrary/S24_P3_2.png'

import '../styles/artlibrary.css'
export function ArtLibrary() {
    return (
        <>

            <div className="album">
                <div className="responsive-container-block bg">
                    <div className="responsive-container-block img-cont">
                        <img className="img"
                             src={F24_P1}/>
                        <img className="{img}"
                             src={S24_P2_1}/>
                    </div>
                    <div className="responsive-container-block img-cont">
                        <img className="img img-big"
                             src={F24_P2}/>
                        <img className="img img-big "
                             src={F24_P2_1}/>
                        <img className="img img-big "
                             src={S24_P2_2}/>
                    </div>
                    <div className="responsive-container-block img-cont">
                        <img className="img"
                             src={F24_P3}/>
                        <img className="img"
                             src={F24_P3_1}/>
                        <img className="img"
                             src={S24_P2_3}/>
                    </div>
                </div>
            </div>
        </>
    )
}
