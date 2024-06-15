
function showSemesterDetail(e, semester_num) {

    let semester_block = document.getElementById(`semester-block-${semester_num}`)

    let arrow_button = e.target

    let detail = `
        <div id="semester-detail" class="z-10 relative w-full flex flex-row bg-slate-200 border-main border-2 rounded-lg -mt-2 text-black">
            <ul class="basis-1/2 list-disc pl-10 py-6 space-y-2">
                <li>Otomata dan teori bahasa</li>
                <li>Interaksi Manusia dan Komputer ${semester_num === 1 ? '<span class="text-alert">( tidak lulus )</span>' : ''}</li> 
                <li>Matematika Diskrit</li>
            </ul>
            <ul class="basis-1/2 list-disc pl-10 py-6 space-y-2">
                <li>Otomata dan teori bahasa</li>
                <li>Interaksi Manusia dan Komputer</li>
                <li>Matematika Diskrit</li>
                <li>Matematika Diskrit</li>
            </ul>
        </div>
    `

    if (arrow_button.textContent.includes("keyboard_arrow_up")) {
        arrow_button.textContent = "keyboard_arrow_down"
        const range = document.createRange();

        // Create a DocumentFragment from the string representation
        const fragment = range.createContextualFragment(detail);

        semester_block.appendChild(fragment)
        
    } else {
        arrow_button.textContent = "keyboard_arrow_up"
        semester_block.removeChild(semester_block.children[1])
    }


    console.log(e.target.parentNode)

}