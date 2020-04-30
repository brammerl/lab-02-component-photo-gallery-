import React, { Component } from 'react'
import ImageItem from'./imageItem';

export default class ImageList extends Component {
    state = {selected: null};
    handleChange = (e) => {
        this.setState({ selected: e.target.value });
    };

    render() {
        return (<main>
                <section id='selector'>
                    <select className='dropDown' onChange={this.handleChange}>
                        <option value='' defaultValue>All</option>
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unicorn'>Unicorn</option>
                        <option value='unilego'>UniLego</option>
                        <option value='triceratops'>Triceratops</option>
                        <option value='markhor'>Markhor</option>
                        <option value='mouflon'>Mouflon</option>
                        <option value='addax'>Addax</option>
                        <option value='chameleon'>Chameleon</option>
                        <option value='lizard'>Lizard</option>
                        <option value='dragon'>Dragon</option>
                    </select>
                </section>

                <section id='results'>
                    <ul className='organismList'>
                        {
                            this.props.array
                                .filter(object => {
                                   if (!this.state.selected) 
                                   return true;

                                   return object.keyword === this.state.selected;
                                }).map(object => {
                                    return <ImageItem organism={object}/>
                                })
                        }
                            </ul>
                </section>
                </main>
        )
    }
};