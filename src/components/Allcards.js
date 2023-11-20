import Card from './Card';
import card1 from '../media/card1.webp';
import card2 from '../media/card2.webp';
import card3 from '../media/card3.webp';

function Allcards(){
    return(
        <div className='mt-5 text-center'>
            <Card img={card1} title={'The Queen'} desc={'The Queen is the most powerful piece on the board'}/>
            <Card img={card2} title={'The Knight'} desc={'The only pieces that can "jump" over other pieces on the board'}/>
            <Card img={card3} title={'The Rook'} desc={'The Rook moves horizontally or vertically'}/>
            <Card img={card1} title={'The Bishop'} desc={'The Bishop moves Diagonally in any direction'}/>
        </div>
    )
}

export default Allcards;
