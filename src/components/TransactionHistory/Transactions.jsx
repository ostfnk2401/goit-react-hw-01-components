import PropTypes from "prop-types";
import {Table, Thead, Theader, Tbody, Trow, TableEL} from "./Transactions.styled"

export const Transaction = ({transactions}) =>{
    return (
        <Table>
            <Thead>
                <tr>
                    <Theader>Type</Theader>
                    <Theader>Amount</Theader>
                    <Theader>Currency</Theader>
                </tr>
            </Thead>
            <Tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <Trow key={id} prop={type}>
                            <TableEL>{type}</TableEL>
                            <TableEL>{amount}</TableEL>
                            <TableEL>{currency}</TableEL>
                        </Trow>
                    );
                })}
            </Tbody>
        </Table>
    );
};

Transaction.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }).isRequired,
    ).isRequired,
}