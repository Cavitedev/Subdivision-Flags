import { JSX } from "solid-js/jsx-runtime";
import { useHashContext } from "../../context/hashContext";

export default function SidebarListItem(props: {
    hash: string;
    icon: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
    label: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
}) {
    const { hash, setHash } = useHashContext();

    const active = () => {
        return hash() === `#${props.hash}` || (hash() === "" && props.hash === "settings");
    };

    return (
        <li>
            <a
                href={`#${props.hash}`}
                onClick={(e) => {
                    e.preventDefault();
                    setHash(props.hash);
                }}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                classList={{ "bg-gray-200 dark:bg-gray-600": active() }}
            >
                <svg
                    class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                >
                    {props.icon}
                </svg>
                <span class="ml-3">{props.label}</span>
            </a>
        </li>
    );
}
