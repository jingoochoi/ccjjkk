// DC PJ 검색모듈 컴포넌트 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export function Searching(p){
    const schlist=()=>{}
    const enterKey=()=>{}
    const check=()=>{}
    return(
        <>
            <section className="schbx">
                <div className="schopt">
                    <div className="searching">
                    <FontAwesomeIcon
                  icon={faSearch}
                  className="schbtn"
                  title="Open search"
                  onClick={schlist}
                />
                {/* 입력창 */}
                <input
                  id="schin"
                  type="text"
                  placeholder="Filter by Keyword"
                  onKeyUp={enterKey}
                />
                    </div>
                    <div className="chkbx">
                        <ul>
                            <li>
                                <h2>ALIGNMENT<span>+</span></h2>
                                <ol>
                                    <li>Heroes<input type="checkbox" id="hero" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="hero" className="chklb"></label></li>
                                    <li>It's Complicated<input type="checkbox" id="comp" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="comp" className="chklb"></label></li>
                                    <li>Villains<input type="checkbox" id="vill" className="chkhdn" onChange={check}></input>
                                    <label htmlFor="vill" className="chklb"></label></li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="listbx"></div>
            </section>
        </>
    )

} ////////////// Searching 컴포넌트 //////////