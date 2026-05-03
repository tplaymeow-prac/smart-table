import { rules, createComparison } from "../lib/compare.js";

function initSearching(searchField) {
    const compare = createComparison(
        ["skipEmptyTargetValues"],
        [
            rules.searchMultipleFields(
                searchField,
                ["date", "customer", "seller"],
                false
            )
        ]
    );

    return (data, state, action) => {
        return data.filter(item => compare(item, state));
    };
}

export default initSearching;