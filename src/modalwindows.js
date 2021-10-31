import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreditCardInformation from './CreditCards';

export function BuyModalWindow(props){
        return (
            <Modal id="buy" tabIndex="-1" role="dialog" isOpen={this.props.showModal} toggle={this.props.toggle}>
                <div role="document">
                    <ModalHeader toggle={this.props.toggle} className="bg-success text-white">
                        Buy Item
                    </ModalHeader>
                    <ModalBody>
                    {/* 신용카드 결제 폼 */}
                    <CreditCardInformation show={true} opertation="Charge" toggle={props.toggle} />
                    </ModalBody>
                </div>
            </Modal>
        );
}