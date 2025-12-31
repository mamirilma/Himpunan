        function parseSet(input) {
            if (!input.trim()) return new Set();
            
            // Split by comma and trim each element
            const elements = input.split(',').map(item => {
                let trimmed = item.trim();
                // Remove quotes if present and convert to appropriate type
                if ((trimmed.startsWith("'") && trimmed.endsWith("'")) || 
                    (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
                    return trimmed.slice(1, -1);
                }
                // Try to convert to number if possible
                if (!isNaN(trimmed)) {
                    return Number(trimmed);
                }
                return trimmed;
            });
            
            return new Set(elements);
        }

        // Fungsi untuk menampilkan himpunan dengan format yang rapi
        function formatSet(set) {
            if (set.size === 0) return "∅";
            
            const elements = Array.from(set);
            // Sort elements if they are numbers
            if (elements.every(el => typeof el === 'number')) {
                elements.sort((a, b) => a - b);
            }
            
            return `{${elements.join(', ')}}`;
        }

        // Operasi Gabungan (Union)
        function calculateUnion() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const union = new Set([...setA, ...setB]);
            document.getElementById('result').innerHTML = `
                <strong>A ∪ B =</strong> ${formatSet(union)}<br>
                <em>Gabungan dari himpunan A dan B</em>
            `;
        }

        // Operasi Irisan (Intersection)
        function calculateIntersection() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const intersection = new Set([...setA].filter(x => setB.has(x)));
            document.getElementById('result').innerHTML = `
                <strong>A ∩ B =</strong> ${formatSet(intersection)}<br>
                <em>Irisan dari himpunan A dan B</em>
            `;
        }

        // Operasi Selisih A - B
        function calculateDifferenceAB() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const difference = new Set([...setA].filter(x => !setB.has(x)));
            document.getElementById('result').innerHTML = `
                <strong>A - B =</strong> ${formatSet(difference)}<br>
                <em>Elemen yang ada di A tetapi tidak ada di B</em>
            `;
        }

        // Operasi Selisih B - A
        function calculateDifferenceBA() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const difference = new Set([...setB].filter(x => !setA.has(x)));
            document.getElementById('result').innerHTML = `
                <strong>B - A =</strong> ${formatSet(difference)}<br>
                <em>Elemen yang ada di B tetapi tidak ada di A</em>
            `;
        }

        // Operasi Komplemen (diasumsikan semesta = gabungan A dan B)
        function calculateComplement() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const universal = new Set([...setA, ...setB]);
            const complementA = new Set([...universal].filter(x => !setA.has(x)));
            const complementB = new Set([...universal].filter(x => !setB.has(x)));
            
            document.getElementById('result').innerHTML = `
                <strong>Semesta U =</strong> ${formatSet(universal)}<br>
                <strong>A' =</strong> ${formatSet(complementA)}<br>
                <strong>B' =</strong> ${formatSet(complementB)}<br>
                <em>Komplemen relatif terhadap semesta U = A ∪ B</em>
            `;
        }

        // Operasi Perkalian Kartesian
        function calculateCartesian() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const cartesian = [];
            for (let a of setA) {
                for (let b of setB) {
                    cartesian.push(`(${a}, ${b})`);
                }
            }
            
            document.getElementById('result').innerHTML = `
                <strong>A × B =</strong> {${cartesian.join(', ')}}<br>
                <em>Perkalian kartesian A dan B</em><br>
                <strong>Jumlah pasangan:</strong> ${cartesian.length}
            `;
        }

        // Cek Subhimpunan
        function checkSubset() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const isASubsetOfB = [...setA].every(x => setB.has(x));
            const isBSubsetOfA = [...setB].every(x => setA.has(x));
            
            document.getElementById('result').innerHTML = `
                <strong>A ⊆ B:</strong> ${isASubsetOfB ? 'Benar' : 'Salah'}<br>
                <strong>B ⊆ A:</strong> ${isBSubsetOfA ? 'Benar' : 'Salah'}<br>
                <em>Subhimpunan: A ⊆ B jika semua elemen A ada di B</em>
            `;
        }

        // Cek Kesamaan Himpunan
        function checkEqual() {
            const setA = parseSet(document.getElementById('setA').value);
            const setB = parseSet(document.getElementById('setB').value);
            
            const isEqual = setA.size === setB.size && [...setA].every(x => setB.has(x));
            
            document.getElementById('result').innerHTML = `
                <strong>A = B:</strong> ${isEqual ? 'Benar' : 'Salah'}<br>
                <em>Himpunan sama jika memiliki elemen yang sama persis</em>
            `;
        }