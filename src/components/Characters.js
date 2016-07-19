import React, { Component } from 'react';

class Characters extends Component {
    render() {
        return(
            <div className="grid">
                    <div className="grid__col-sm-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim a odio a tempor. Mauris vel nibh nunc. Suspendisse vulputate eros lectus, vitae tempus risus fringilla aliquam. Phasellus efficitur eleifend lorem, sit amet elementum metus feugiat at. Ut neque mauris, rhoncus eget leo a, blandit mollis ligula. Aliquam erat volutpat. Aenean auctor consequat nisi eget ullamcorper. Integer quam enim, aliquam sit amet dolor eu, tempor blandit neque. Cras nibh nisl, faucibus vel gravida vitae, molestie a leo. Sed eget consectetur mi. Maecenas pellentesque molestie elementum. Quisque enim sem, finibus et congue eget, imperdiet ut massa.</p>
                    </div>
                    <div className="grid__col-sm-4">
                        <img className="grid__cell-img" src="http://lorempixel.com/200/200/" />
                    </div>
                </div>
        );
    }
}

export default Characters;