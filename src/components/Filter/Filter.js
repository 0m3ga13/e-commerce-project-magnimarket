import React, { useEffect, useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const FilterSidebar = ({ categories, filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const filterName = event.target.name
    const filterValue = event.target.value.toLowerCase()

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }))
  }

  const handlePriceRangeChange = (range) => {
    const [minPrice, maxPrice] = range

    setFilters((prevFilters) => ({
      ...prevFilters,
      price_min: minPrice,
      price_max: maxPrice,
    }))
  }

  const handleCategorySelectChange = (event) => {
    const categoryId = event.target.value
    setFilters((prevFilters) => ({
      ...prevFilters,
      categoryId: categoryId === "all" ? null : categoryId,
    }))
  }

  useEffect(() => {
    const queryParams = []

    if (filters.categoryId) {
      queryParams.push(`categoryId=${filters.categoryId}`)
    }

    if (filters.title) {
      queryParams.push(`title=${filters.title}`)
    }

    if (filters.price_min && filters.price_max) {
      queryParams.push(
        `price_min=${filters.price_min}&price_max=${filters.price_max}`,
      )
    }

    const queryString = queryParams.join("&")
    window.history.replaceState({}, "", `/products?${queryString}`)
  }, [filters, categories])

  return (
    <div
      className={`z-10 sticky top-0 bg-accent/80 p-4 py-8 w-full overflow-hidden h-0 text-bkg hover:h-48 transition-all ease-in-out duration-300`}
    >
      <div className="flex justify-center ">
        <svg
          fill="#FFFF"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 50 100"
        >
          <g>
            <g>
              <path
                d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774
			c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815
			C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607
			c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205
			C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501
			C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763
			c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733
			s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128
			c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735
			c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77
			c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z
			 M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85
			C30.906,27.334,27.355,30.85,22.976,30.85z"
              />
            </g>
          </g>
        </svg>
        <h2 className="text-xl font-semibold -mt-2 text-white">
          Filter Products
        </h2>
      </div>
      <div className="flex justify-between space-x-12 items-center">
        <div className="flex-1">
          <label htmlFor="title" className="block">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded w-full"
            onChange={handleFilterChange}
            value={filters.title || ""}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="category" className="block">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="border rounded w-full"
            value={filters.categoryId || "all"}
            onChange={handleCategorySelectChange}
          >
            <option value="all">All</option>
            {categories.slice(0, 5).map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 mt-5">
          <label htmlFor="price">Price Range:</label>
          <Slider
            range
            min={0}
            max={1000}
            step={100}
            dots={true}
            value={[filters.price_min, filters.price_max]}
            onChange={handlePriceRangeChange}
          />
          <div className="flex justify-between">
            <span>{filters.price_min}</span>
            <span>{filters.price_max}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
