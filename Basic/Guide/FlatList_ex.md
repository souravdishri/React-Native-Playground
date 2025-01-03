import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
];

const ItemSeparator = () => <View style={styles.separator} />;
const ListHeader = () => <Text style={styles.header}>List Header</Text>;
const ListFooter = () => <Text style={styles.footer}>List Footer</Text>;

const App = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.title}</Text>
                </View>
            )}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
    },
    footer: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default App;



- data: The source data for the list.

- keyExtractor: A function that returns a unique key for each item.

- renderItem: A function that renders each item.

- Use keyExtractor: Ensure each item has a unique key.

- Optimize renderItem: Keep the rendering logic efficient.

- Use shouldComponentUpdate and React.memo: