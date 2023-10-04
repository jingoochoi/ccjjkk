// 배열 데이터 생성하기
const data = [
    {이름:"김소영",전화번호:"010-222-3333",생일:"20.01.20"},
    {이름:"전우치",전화번호:"010-555-8888",생일:"18.05.20"},
    {이름:"강감찬",전화번호:"010-666-5555",생일:"21.02.03"},
    {이름:"공유",전화번호:"010-999-5555",생일:"79.08.20"},
    {이름:"김마리",전화번호:"010-888-4578",생일:"00.01.02"},
];
// 최상위부모는 무조건 하나만
const lcode=data.map(a=>
        <tr>
            <td>{a.이름}</td>
            <td>{a.전화번호}</td>
            <td>{a.생일}</td>
        </tr>
    )
const tcode=(
    <div>
        <h1>list of my friends</h1>
        <table>
            <tr>
                <th>name</th>
                <th>tel</th>
                <th>birthday</th>
            </tr>
            {lcode}
            {/* {주석도 중괄호 안에}
                반복리스트 사용도 중괄호 안에 */
                }
        </table>
    </div>
)
// console.log(tcode)
ReactDOM.render(tcode,document.querySelector('#root'))