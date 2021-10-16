import React from 'react';

import machanic1 from '../../../images/mechanic/mechanic-1.jpg'
import machanic2 from '../../../images/mechanic/mechanic-2.jpg'
import machanic3 from '../../../images/mechanic/mechanic-3.jpg'
import machanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';
const experts = [
    {
        img: machanic1,
        name: 'Endraw Smith',
        expertize: '-Engine Experts-'
    },
    {
        img: machanic2,
        name: 'Jhon Anderson',
        expertize: '-Polish Experts-'
    },
    {
        img: machanic3,
        name: 'Zakaria Smith',
        expertize: '-Color Experts-'
    },
    {
        img: machanic4,
        name: 'Sakib Smith',
        expertize: '-Alrounder Experts-'
    },
]




const Experts = () => {
    return (
        <div className="container">
            <h3 className="text-primary pt-3">Our Experts</h3>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;