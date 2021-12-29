import { motion } from "framer-motion";

export const PageTransition = () => {
	return (
		<>
			<motion.div
				className="mount page_transition_overlay z_page_transition_overlay"
				initial={{ bottom: "0" }}
				animate={{ bottom: "100vh" }}
				transition={{ duration: 0.6 }}
			/>
			<motion.div
				className="unmount page_transition_overlay z_page_transition_overlay"
				initial={{ bottom: "0", height: "0" }}
				transition={{ duration: 0.6 }}
				exit={{ height: "100vh" }}
			/>
		</>
	);
};
