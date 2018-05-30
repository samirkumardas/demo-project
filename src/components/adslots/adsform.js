import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './adsform.css';
import { slotSaveReq, slotDetailReq } from './reducer';
import { getFormRules, getSlotTypes } from 'utils/helper';

class Adsform extends Component {
    
    constructor(props) {
        const errors = {},
              fields = {};
        super(props);
        this.slotTypes = getSlotTypes();
        this.rules = getFormRules();
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.rules.forEach((rule) => {
            errors[rule.name] = '';
            fields[rule.name] = '';
        });

        this.state = { 
            errors:errors, 
            ...fields,
            hasFetchedDone: !this.props.id,
            dataError: false
        };
    }

    componentDidMount() {
        if (this.props.id) {
            this.requestSlotDetail();
        }
    }

    submitForm() {
        let isValid = true,
            errors = {},
            payload = {},
            id;

        this.rules.forEach((rule) => {
            if (rule.required
                && (!this.state[rule.name]
                    || (rule.regex
                        && !rule.regex.test(this.state[rule.name])))) {
                errors[rule.name] = rule.message;
                isValid = false;
            } else {
                payload[rule.name] = (rule.type === 'boolean') ? !!this.state[rule.name]
                    : (rule.type === 'nmber') ? parseInt(this.state[rule.name],10) : this.state[rule.name];
            }
        });

        this.setState({
            errors:errors
        });
    
        if (isValid) {
             id = parseInt(this.props.id,10) || 0;
             this.props.dispatch(slotSaveReq({
                data:payload,
                id : id
             }));
        }
    }

    requestSlotDetail() {
        this.props.dispatch(slotDetailReq(this.props.id,10));
    }

    setFormNode(type, node) {
        this.rules.forEach((rule) => {
            type === rule.type ? (rule.node = node && rule) : rule;
        });
    }

    handleInputChange(event) {
        const target = event.target,
              value = target.type === 'checkbox' ? target.checked : target.value,
              name = target.name;
        this.setState({
          [name]: value
        });
    }

    static getDerivedStateFromProps(props, state) {
        const rules = getFormRules(),
              nextState = {};

        if (!state.hasFetchedDone) {
            rules.forEach((rule) => {
                if (props.formData[rule.name] && props.formData[rule.name] !== state[rule.name] ) {
                    nextState[rule.name] = props.formData[rule.name];
                    props.formData[rule.name] = '';
                }
            });
        }

        if (props.apiError) {
            nextState.apiError = true;
        }
        if (Object.keys(nextState).length) {
            nextState.hasFetchedDone = true;
        }
        return nextState.hasFetchedDone ? nextState : null;
    }

    render() {

        return ( this.state.apiError ? '' :
           <div className={styles.adsOverlay}> 
            <div className={styles.adsForm}>
              <ul>
                <li>
                  <label htmlFor="name">Name</label>
                   <input
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        ref={node => this.setFormNode('name', node)}
                        onChange={this.handleInputChange}
                        placeholder="Enter Slot Name" />
                   <span className={ this.state.errors.name ? styles.errorShow : styles.errorHide}>{this.state.errors.name}</span>
                </li>
                <li>
                  <label htmlFor="format">Format</label>
                   <input
                        id="format"
                        name="format"
                        type="text"
                        value={this.state.format}
                        ref={node => this.setFormNode('format', node)}
                        onChange={this.handleInputChange}
                        placeholder="Enter Ads Format" />
                   <span className={ this.state.errors.format ? styles.errorShow : styles.errorHide}>{this.state.errors.format}</span>
                </li>
                <li>
                  <label htmlFor="url">URL</label>
                   <input
                        id="url"
                        name="url"
                        type="text"
                        value={this.state.url}
                        ref={node => this.setFormNode('url', node)}
                        onChange={this.handleInputChange}
                        placeholder="Enter URL" />
                   <span className={ this.state.errors.url ? styles.errorShow : styles.errorHide}>{this.state.errors.url}</span>
                </li>
                <li>
                  <label htmlFor="price">Price</label>
                   <input
                        id="price"
                        name="price"
                        type="text"
                        value={this.state.price}
                        ref={node => this.setFormNode('price', node)}
                        onChange={this.handleInputChange}
                        placeholder="Enter Price" />
                   <span className={ this.state.errors.price ? styles.errorShow : styles.errorHide}>{this.state.errors.price}</span>
                </li>
                <li>
                  <label htmlFor="type">Type</label>
                   <select 
                        id="type"
                        name="type"
                        value={this.state.type}
                        ref={node => this.setFormNode('type', node)}
                        onChange={this.handleInputChange}>
                             <option value="">Select Type</option>
                             { Object.keys(this.slotTypes).map(key => {
                                    return (
                                        <option key={key} value={key}>{this.slotTypes[key]}</option>
                                    )})
                             }
                   </select>
                   <span className={ this.state.errors.type ? styles.errorShow : styles.errorHide}>{this.state.errors.type}</span>
                </li>
                <li>
                  <label htmlFor="fallback">Fallback</label>
                   <input
                        id="fallback"
                        name="fallback"
                        checked={this.state.fallback}
                        ref={node => this.setFormNode('fallback', node)}
                        onChange={this.handleInputChange}
                        type="checkbox" />
                </li>
                <li className={styles.formBtn}>
                   <button onClick={this.submitForm}>Save</button><button onClick={this.props.cancelForm}>Cancel</button>
                </li>
              </ul>
            </div>
           </div>
        );  
    }
    
}


Adsform.propTypes = {
    formData: PropTypes.any.isRequired,
    id: PropTypes.number,
    cancelForm: PropTypes.func,
    apiError: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  formData: state.getIn(['adslots', 'formData']).toJS(),
  apiError: state.getIn(['adslots', 'apiError'])
});

export default connect(mapStateToProps, (dispatch) => ({ dispatch }))(Adsform);