
import { usePromiseTracker } from "react-promise-tracker";
import "./loadingIndicator.css";

export default function LoadingIndicator({ }) {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&

        <div class="col-3">
            <div class="stage filter-contrast">
                <div class="dot-overtaking"></div>
            </div>
        </div>

    );
}
