import React,{Component} from "react";
import CardContent from "../../component/card/CardContent";


class main extends Component {
    render() {
        return (
            <div>
                <CardContent 
                title="title 1" 
                dataImg="https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg" 
                desc="Nesciunt eligendi officia exercitationem inventore nobis omnis non, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!" 
                />
                <CardContent 
                title="title 2" 
                dataImg="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" 
                desc="consectetur adipisicing elit. Nesciunt eligendi officia exercitationem inventore nobis omnis non, quas recusandae. Consectetur!"
                />
                <CardContent 
                title="title 3" 
                dataImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKH4iA4wP-Q6VKAAQm8SOrTAVQmvp70g0clZbu3uPuEjh_Fh7cdWzhamCD6zd8l8EDI8&usqp=CAU" 
                desc="deserunt voluptatibus beatae voluptas distinctio, quo nisi eius maiores fugit dignissimos quas recusandae. Consectetur!"
                />
                <CardContent />
            </div>
        );
    }
}
export default main;
