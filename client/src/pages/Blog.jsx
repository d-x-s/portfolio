import { Box, Typography } from "@mui/material";
import { PageStyle } from "../style/PageStyles";
import KouyouBanner from '../assets/kouyoubanner.jpg';
import ElfinLakes from '../assets/elfin.png';

const blogEntries = [
    {
        id: 1,
        title: "Kouyou no Hanashi",
        description: "04 / 10 / 22 | My winning short story for The University of British Columbia's 2022 Japanese Writing Contest.",
        content: 
        `   紅葉の話
    
            昔々、山上の木に住んでいる精霊がいました。名前は紅葉でした。彼女は葉をドレスのように纏っていて美しいですが、いつも悲しそうでした。話す人がいなかったので、だんだん寂しくなってきました。
            
            ある日、山に嵐が吹き荒れました。雷が山に落ちて地面に火をつけました。翌朝、紅葉は地面に寝ている誰かを見つけました。起こすために紅葉は彼の体に触れましたが、彼の肌はとても熱かったので、紅葉は叫びました。彼は目を覚ましました。
            
            紅葉が名前を聞くと「炎」と返事しました。
            
            炎は「なぜ俺はここにいる？なぜ生きているの？」と聞きました。
            
            紅葉は「私にも分かりません。一緒に人生の意味を探しませんか」と答えました。
            
            そして、二人は湖で泳いだり、平原で踊ったり、海辺で夕焼けを見たりしました。
            楽しかったですが、紅葉のドレスの葉は脆く、炎の肌に触れられませんでした。

            夜になって急に雨が降って来ました。炎にとって雨は危なかったです。
            避難所を探しましたが、何も見つけられませんでした。雨が痛すぎて炎は倒れこんでしまいました。
            紅葉は自分の体で炎を守ってくれましたが、酷く火傷しました。
            彼が彼女にとって、人生の中で唯一のものだったので、痛みに関わらず彼女は守り続けました。
            すぐに紅葉も倒れこんでしまいました。翌日、二人の体から紅葉の焼けたドレスのような赤い苗木が生えました。

            だから毎年秋、雨が降る時、紅葉と炎の思い出のために木々が赤く色づきます。
             `,
        image: KouyouBanner,
    },
    // {
    //     id: 1,
    //     title: "Elfin Lakes",
    //     description: "07 / 08 / 22 | Beautiful alpine lakes reflect Mount Garibaldi in the background.",
    //     content: "Went to Elfin Lakes again this summer— a tradition I've kept for years now. It's just something about that place; the clear waters and the calm surroundings are a nice break. Every time I go, even though it's the same spot, it feels different in subtle ways. Whether it's the way the light hits the water or the new bird calls I notice. It's a familiar but refreshing getaway.",
    //     image: ElfinLakes,
    // },

];

const ContainerStyle = {
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    maxHeight: '1000px',
    gap: '20px',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
    },
};

const entryStyle = {
    fontFamily: 'Montserrat',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    // border: '1px solid gray',
    padding: '10px',
    '@media (max-width: 600px)': {
        width: '80%',
    },
    '& img': {
        // paddingLeft: '100%',
        // paddingRight: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

function NewlineText({ text }) {
    const newText = text.split('\n').map((str, index, array) => 
      index === array.length - 1 ? str : <>
        {str}
        <br />
      </>
    );
  
    return <>{newText}</>;
  }
  

function BlogEntry({ entry }) {
    return (
        <Box sx={entryStyle}>
            <Typography fontFamily="Montserrat" fontWeight="Light"variant="h5" gutterBottom>
                {entry.title}
            </Typography>
            <img src={entry.image} alt={entry.title} />
            <Typography fontFamily="Montserrat" fontWeight="Light" variant="subtitle1" gutterBottom>
                {entry.description}
            </Typography>
            <Typography fontFamily="Montserrat" fontWeight="Light" variant="body1">
                {/* {entry.content} */}
                <NewlineText text={entry.content} />
                {/* {entry.content} */}
            </Typography>
        </Box>
    );
}

export default function Blog() {
    return (
        <Box sx={PageStyle}>
            <Box sx={ContainerStyle}>
                {blogEntries.map(entry => (
                    <BlogEntry key={entry.id} entry={entry} />
                ))}
            </Box>
        </Box>
    );
}
