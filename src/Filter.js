import React, {Component} from 'react';
import './App.css';
import './text.css';
import './title.css';
import './modal/modal.css';

export class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: '',
            sortKey: null
        };
    }

    clear = () => {
        this.props.setPageLimit(null);
        this.props.setSortKey(null);
        this.setState({limit: ''})
    };

    setPageLimit(limit) {
        this.setState({limit})
        this.props.setPageLimit(limit)
    }

    setSortKey(sortKey) {
        this.setState({sortKey})
        this.props.setSortKey(sortKey)
    }

    render() {
        return (
            <div className="aside-container">
                <h2 className="header">Sortuj po</h2>
                <div className="sort-options">
                    <div className="text">
                        <input name="sort" type="radio"
                               checked={this.state.sortKey === 'pages'}
                               onChange={e => this.setSortKey(e.target.value)}
                               value="pages"/>
                        ilości stron
                    </div>
                    <div className="text">
                        <input name="sort" type="radio"
                               checked={this.state.sortKey === 'sortReleaseDate'}
                               onChange={e => this.setSortKey(e.target.value)}
                               value="sortReleaseDate"/>
                        dacie wydania
                    </div>
                    <div className="text">
                        <input name="sort" type="radio"
                               checked={this.state.sortKey === 'surname'}
                               onChange={e => this.setSortKey(e.target.value)}
                               value="surname"/>
                        nazwisku autora
                    </div>
                </div>
                <div>
                    <div className="divider"/>
                </div>
                <h2 className="header">Pokaż tylko</h2>
                <div className="text">Powyżej <input className="input" type="text" value={this.state.limit}
                                                     onChange={e => this.setPageLimit(e.target.value)}/> stron
                </div>
                <div>
                    <div className="divider"/>
                </div>
                <div className="button-container">
                    <button className="button text" onClick={this.clear}>Wyczyść</button>
                </div>
            </div>
        )
    }
}