// import { useEffect } from 'react';
//
// export enum GTAGEvent {
//     click='click sample button',
//     redirect='click redirect button'
// }
// const useGoogleTagManager = () => {
//     useEffect(() => {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() {
//             dataLayer.push(arguments);
//         }
//         gtag('js', new Date());
//         gtag('config', 'YOUR-GTM-ID');
//     }, []);
//
//     const sendEvent = (eventName, eventData) => {
//         window.dataLayer.push({
//             event: eventName,
//             ...eventData,
//         });
//     };
//
//     return { sendEvent };
// };
//
// export default useGoogleTagManager;


//@example
// const MyComponent = () => {
//     const { sendEvent } = useGoogleTagManager();
//
//     const handleClick = () => {
//         sendEvent(GTAGEvent.click, { buttonName: 'MyButton' });
//     };
//
//     return <button onClick={handleClick}>Click Me</button>;
// };