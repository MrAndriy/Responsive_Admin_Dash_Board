import React, {
	useContext,
	useState,
	useCallback,
	useEffect,
	createContext,
} from 'react';

const APIContext = createContext();

export function APIContextProvider({ children }) {




	return (
		<APIContext.Provider
			value={{
				
			}}
		>
			{children}
		</APIContext.Provider>
	);
}

export function useAPI() {
	const context = useContext(APIContext);
	if (context === undefined) {
		throw new Error('Context must be used within a Provider');
	}
	return context;
}
