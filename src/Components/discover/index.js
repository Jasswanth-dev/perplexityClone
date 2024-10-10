import {Component} from 'react'
import BigFeed from "./Feeds/BigFeed"
import Smallfeed from "./Feeds/Smallfeed"
import FeedPage from './Feeds/Feedpage'


import './index.css'

const feedsData = [
    {
        id: 0, 
        image: "https://pplx-res.cloudinary.com/image/upload/v1727728086/server_uploads/skxrcnabvf0td19ifbas.png",
        title: "Quantum Computer Doom Challenge",
        content: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.",
        postedBy: "elymc",
        profileImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOhAAAgIBAgIHBQUGBwAAAAAAAAECAwQFESExEiJBUVJhcRMjMpHBQnKBobEGFGKCkvAVMzRTc6Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAdSbaSTbfLYDh9VwnZLo1xcn3Jblrg6O5pTy24rsguf4lzVTXTBQqioryAz9Wj5di3ko1r+J8SVDQvHf8olzsAKh6DX2XS39EeVmhTS6l0X95bF4AMxfpuXTu5VdJd8OJD+nM2ZGysHHyl7yHW8S4MDKriCbnaddidf46vEuz1RCAAAAAAAAAAAAAAAAAAADsYuclCCbk3wSNFpunRxkp2da5/wDX0PLRcFVwWRbHryXV37EWoAAAAAAAAAAAcaTTTW6ZRarpvsU78ePU+1Hw+ZfHHtts1wAxoJ2rYX7rd0oL3U+K8n3EEAAAAAAAAAAAAAAErTsb96yoQ26qe8vQi7l7oNKjRO185vZPyQFsuQAAA6AOA6AOA6AOA6AOA6AI2bjrJx51Pm1vF9zMq04txktmuDNmZnWafZZ0tlsppS+gEEAAAAAAAAAAAAA32TNVp0PZ4NEV4d/nxMq+Rr8fhj1fcX6AegAA6AAAAAAAAAAAAAFL+0UOrRYue7j+W5dFV+0P+lq/5PowKAAAAAAAAAAAAAAfFGtwp+0w6ZLtgv0MkaLRLVPCUO2tuP1AsQAB0AAAAAAAAAAAAAKj9ope5ph2ue/5f+luZ/X7elmQrXKEePq/7QFWAAAAAAAAAAAAAFjomR7LK9nL4bOH4lcdT2aa4NPfcDZAiadlrLx+k9unHhJeZLA6AAAAAAAAAAAAA+LZquuU5cordmSvtd107Jc5Pcttdy99sauXnNr9ClAAAAAAAAAAAAAAAAA98PJni3qyH8y70afGvryKlZXLdP8AIyJ74uVZiWe0qfP4k+TA1oIeFqFOUtovozXOD5kwAAAAAAAHG0lu+QHSv1TPjiw6FbTulyXh82eOoavCCdeLtKfj7EUU5OcnKTbk3u2+bASblJyk22+Lb7TgAAAAAAAAAAAAAAAAAADt4kmnByb+NdT6PfLggI64cVwfeT8bVsihbS2tivFz+ZFyMa7GltdBx7n2P8TxA0NOtY00vaKdb81uvmSo5+LLlfX8zKADWvLx1zur/qR5z1LEhzui/TiZYAXt+uVrdU1Sk++XBFXk52Rk7+0s2j4Y8ERgA7AS6NOybo9OFbUezpcNzxuotofva5Q9eQHkDrOAAAAAAAAAAAAAAAm4WnXZe0tnCvf4n2+hK0rSlJK7JjwfGNb+peR4JLkBExdPx8ZbqHSl4pcWTAAPmUVKO0opruaIN+kYtrbjF1v+F8PkWAAobNDs391dF+UlseL0jMX2YP0kaQAZn/Cs3/aX9SPuGjZcvi6Ef5jRgClq0Pb/ADrt/uIn4+n41GzhWnJfalxZLAA+ZxjJdGSTT7Gj6AFXl6RTYm6PdT9ODKTJx7cWzoXQa7n2M155X0V5FbrtinFgZAEvUMGeJPtlU/hn3eTIgAAAAAAAAAm6RTC/NjGxbxUXLbzAA0yAAA6AAAAAAAAAAAAAAAAAB5X1QvqnXZHeLMlNdGbS79jgA4AAAAA//9k="

    },
    {
        id: 1, 
        image: "https://pplx-res.cloudinary.com/image/upload/v1728500711/getty_uploads/2177656386.jpg",
        title: "DeepMind's Hassabis Wins Nobel in Chemistry",
        content: "According to the Royal Swedish Academy of Sciences, Demis Hassabis and John Jumper of Google DeepMind have been awarded the 2024 Nobel Prize in Chemistry for their groundbreaking work on protein structure prediction using artificial intelligence, sharing the honor with David Baker for his advances in computational protein design.",
        postedBy: "dailies",
        profileImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOhAAAgIBAgIHBQUGBwAAAAAAAAECAwQFESExEiJBUVJhcRMjMpHBQnKBobEGFGKCkvAVMzRTc6Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAdSbaSTbfLYDh9VwnZLo1xcn3Jblrg6O5pTy24rsguf4lzVTXTBQqioryAz9Wj5di3ko1r+J8SVDQvHf8olzsAKh6DX2XS39EeVmhTS6l0X95bF4AMxfpuXTu5VdJd8OJD+nM2ZGysHHyl7yHW8S4MDKriCbnaddidf46vEuz1RCAAAAAAAAAAAAAAAAAAADsYuclCCbk3wSNFpunRxkp2da5/wDX0PLRcFVwWRbHryXV37EWoAAAAAAAAAAAcaTTTW6ZRarpvsU78ePU+1Hw+ZfHHtts1wAxoJ2rYX7rd0oL3U+K8n3EEAAAAAAAAAAAAAAErTsb96yoQ26qe8vQi7l7oNKjRO185vZPyQFsuQAAA6AOA6AOA6AOA6AOA6AI2bjrJx51Pm1vF9zMq04txktmuDNmZnWafZZ0tlsppS+gEEAAAAAAAAAAAAA32TNVp0PZ4NEV4d/nxMq+Rr8fhj1fcX6AegAA6AAAAAAAAAAAAAFL+0UOrRYue7j+W5dFV+0P+lq/5PowKAAAAAAAAAAAAAAfFGtwp+0w6ZLtgv0MkaLRLVPCUO2tuP1AsQAB0AAAAAAAAAAAAAKj9ope5ph2ue/5f+luZ/X7elmQrXKEePq/7QFWAAAAAAAAAAAAAFjomR7LK9nL4bOH4lcdT2aa4NPfcDZAiadlrLx+k9unHhJeZLA6AAAAAAAAAAAAA+LZquuU5cordmSvtd107Jc5Pcttdy99sauXnNr9ClAAAAAAAAAAAAAAAAA98PJni3qyH8y70afGvryKlZXLdP8AIyJ74uVZiWe0qfP4k+TA1oIeFqFOUtovozXOD5kwAAAAAAAHG0lu+QHSv1TPjiw6FbTulyXh82eOoavCCdeLtKfj7EUU5OcnKTbk3u2+bASblJyk22+Lb7TgAAAAAAAAAAAAAAAAAADt4kmnByb+NdT6PfLggI64cVwfeT8bVsihbS2tivFz+ZFyMa7GltdBx7n2P8TxA0NOtY00vaKdb81uvmSo5+LLlfX8zKADWvLx1zur/qR5z1LEhzui/TiZYAXt+uVrdU1Sk++XBFXk52Rk7+0s2j4Y8ERgA7AS6NOybo9OFbUezpcNzxuotofva5Q9eQHkDrOAAAAAAAAAAAAAAAm4WnXZe0tnCvf4n2+hK0rSlJK7JjwfGNb+peR4JLkBExdPx8ZbqHSl4pcWTAAPmUVKO0opruaIN+kYtrbjF1v+F8PkWAAobNDs391dF+UlseL0jMX2YP0kaQAZn/Cs3/aX9SPuGjZcvi6Ef5jRgClq0Pb/ADrt/uIn4+n41GzhWnJfalxZLAA+ZxjJdGSTT7Gj6AFXl6RTYm6PdT9ODKTJx7cWzoXQa7n2M155X0V5FbrtinFgZAEvUMGeJPtlU/hn3eTIgAAAAAAAAAm6RTC/NjGxbxUXLbzAA0yAAA6AAAAAAAAAAAAAAAAAB5X1QvqnXZHeLMlNdGbS79jgA4AAAAA//9k="
    },
    {
        id: 2, 
        image: "https://pplx-res.cloudinary.com/image/upload/v1728043256/getty_uploads/113492099.jpg",
        title: "Ben Franklin's 200-Year Trust Experiment",
        content: "Benjamin Franklin's 200-year trust experiment, initiated in 1790 with a bequest of £1,000 each to Boston and Philadelphia, aimed to empower young tradesmen through small loans, reflecting his belief in industry and self-reliance. Despite facing challenges such as mismanagement and outdated loan criteria, by 1990 the trusts had grown significantly, funding educational initiatives like the Benjamin Franklin Institute of Technology and job-training programs, thereby fulfilling Franklin's vision of promoting civic virtue and supporting future generations.",
        postedBy: "elymc",
        profileImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOhAAAgIBAgIHBQUGBwAAAAAAAAECAwQFESExEiJBUVJhcRMjMpHBQnKBobEGFGKCkvAVMzRTc6Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAdSbaSTbfLYDh9VwnZLo1xcn3Jblrg6O5pTy24rsguf4lzVTXTBQqioryAz9Wj5di3ko1r+J8SVDQvHf8olzsAKh6DX2XS39EeVmhTS6l0X95bF4AMxfpuXTu5VdJd8OJD+nM2ZGysHHyl7yHW8S4MDKriCbnaddidf46vEuz1RCAAAAAAAAAAAAAAAAAAADsYuclCCbk3wSNFpunRxkp2da5/wDX0PLRcFVwWRbHryXV37EWoAAAAAAAAAAAcaTTTW6ZRarpvsU78ePU+1Hw+ZfHHtts1wAxoJ2rYX7rd0oL3U+K8n3EEAAAAAAAAAAAAAAErTsb96yoQ26qe8vQi7l7oNKjRO185vZPyQFsuQAAA6AOA6AOA6AOA6AOA6AI2bjrJx51Pm1vF9zMq04txktmuDNmZnWafZZ0tlsppS+gEEAAAAAAAAAAAAA32TNVp0PZ4NEV4d/nxMq+Rr8fhj1fcX6AegAA6AAAAAAAAAAAAAFL+0UOrRYue7j+W5dFV+0P+lq/5PowKAAAAAAAAAAAAAAfFGtwp+0w6ZLtgv0MkaLRLVPCUO2tuP1AsQAB0AAAAAAAAAAAAAKj9ope5ph2ue/5f+luZ/X7elmQrXKEePq/7QFWAAAAAAAAAAAAAFjomR7LK9nL4bOH4lcdT2aa4NPfcDZAiadlrLx+k9unHhJeZLA6AAAAAAAAAAAAA+LZquuU5cordmSvtd107Jc5Pcttdy99sauXnNr9ClAAAAAAAAAAAAAAAAA98PJni3qyH8y70afGvryKlZXLdP8AIyJ74uVZiWe0qfP4k+TA1oIeFqFOUtovozXOD5kwAAAAAAAHG0lu+QHSv1TPjiw6FbTulyXh82eOoavCCdeLtKfj7EUU5OcnKTbk3u2+bASblJyk22+Lb7TgAAAAAAAAAAAAAAAAAADt4kmnByb+NdT6PfLggI64cVwfeT8bVsihbS2tivFz+ZFyMa7GltdBx7n2P8TxA0NOtY00vaKdb81uvmSo5+LLlfX8zKADWvLx1zur/qR5z1LEhzui/TiZYAXt+uVrdU1Sk++XBFXk52Rk7+0s2j4Y8ERgA7AS6NOybo9OFbUezpcNzxuotofva5Q9eQHkDrOAAAAAAAAAAAAAAAm4WnXZe0tnCvf4n2+hK0rSlJK7JjwfGNb+peR4JLkBExdPx8ZbqHSl4pcWTAAPmUVKO0opruaIN+kYtrbjF1v+F8PkWAAobNDs391dF+UlseL0jMX2YP0kaQAZn/Cs3/aX9SPuGjZcvi6Ef5jRgClq0Pb/ADrt/uIn4+n41GzhWnJfalxZLAA+ZxjJdGSTT7Gj6AFXl6RTYm6PdT9ODKTJx7cWzoXQa7n2M155X0V5FbrtinFgZAEvUMGeJPtlU/hn3eTIgAAAAAAAAAm6RTC/NjGxbxUXLbzAA0yAAA6AAAAAAAAAAAAAAAAAB5X1QvqnXZHeLMlNdGbS79jgA4AAAAA//9k="
    },
    {
        id: 3, 
        image: "https://pplx-res.cloudinary.com/image/upload/v1728507844/server_uploads/y6cg3wbgykjvgcdcrb31.jpg",
        title: "Europa Clipper Heads to Jupiter",
        content: "NASA's Europa Clipper mission, scheduled for launch in late 2024, aims to explore Jupiter's moon Europa to assess its potential for harboring life by conducting nearly 50 close flybys to study its ocean, ice shell, and geology, while also mapping the surface and analyzing the atmosphere to pave the way for future exploration and discoveries in the search for extraterrestrial life.",
        postedBy: "elymc",
        profileImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOhAAAgIBAgIHBQUGBwAAAAAAAAECAwQFESExEiJBUVJhcRMjMpHBQnKBobEGFGKCkvAVMzRTc6Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAdSbaSTbfLYDh9VwnZLo1xcn3Jblrg6O5pTy24rsguf4lzVTXTBQqioryAz9Wj5di3ko1r+J8SVDQvHf8olzsAKh6DX2XS39EeVmhTS6l0X95bF4AMxfpuXTu5VdJd8OJD+nM2ZGysHHyl7yHW8S4MDKriCbnaddidf46vEuz1RCAAAAAAAAAAAAAAAAAAADsYuclCCbk3wSNFpunRxkp2da5/wDX0PLRcFVwWRbHryXV37EWoAAAAAAAAAAAcaTTTW6ZRarpvsU78ePU+1Hw+ZfHHtts1wAxoJ2rYX7rd0oL3U+K8n3EEAAAAAAAAAAAAAAErTsb96yoQ26qe8vQi7l7oNKjRO185vZPyQFsuQAAA6AOA6AOA6AOA6AOA6AI2bjrJx51Pm1vF9zMq04txktmuDNmZnWafZZ0tlsppS+gEEAAAAAAAAAAAAA32TNVp0PZ4NEV4d/nxMq+Rr8fhj1fcX6AegAA6AAAAAAAAAAAAAFL+0UOrRYue7j+W5dFV+0P+lq/5PowKAAAAAAAAAAAAAAfFGtwp+0w6ZLtgv0MkaLRLVPCUO2tuP1AsQAB0AAAAAAAAAAAAAKj9ope5ph2ue/5f+luZ/X7elmQrXKEePq/7QFWAAAAAAAAAAAAAFjomR7LK9nL4bOH4lcdT2aa4NPfcDZAiadlrLx+k9unHhJeZLA6AAAAAAAAAAAAA+LZquuU5cordmSvtd107Jc5Pcttdy99sauXnNr9ClAAAAAAAAAAAAAAAAA98PJni3qyH8y70afGvryKlZXLdP8AIyJ74uVZiWe0qfP4k+TA1oIeFqFOUtovozXOD5kwAAAAAAAHG0lu+QHSv1TPjiw6FbTulyXh82eOoavCCdeLtKfj7EUU5OcnKTbk3u2+bASblJyk22+Lb7TgAAAAAAAAAAAAAAAAAADt4kmnByb+NdT6PfLggI64cVwfeT8bVsihbS2tivFz+ZFyMa7GltdBx7n2P8TxA0NOtY00vaKdb81uvmSo5+LLlfX8zKADWvLx1zur/qR5z1LEhzui/TiZYAXt+uVrdU1Sk++XBFXk52Rk7+0s2j4Y8ERgA7AS6NOybo9OFbUezpcNzxuotofva5Q9eQHkDrOAAAAAAAAAAAAAAAm4WnXZe0tnCvf4n2+hK0rSlJK7JjwfGNb+peR4JLkBExdPx8ZbqHSl4pcWTAAPmUVKO0opruaIN+kYtrbjF1v+F8PkWAAobNDs391dF+UlseL0jMX2YP0kaQAZn/Cs3/aX9SPuGjZcvi6Ef5jRgClq0Pb/ADrt/uIn4+n41GzhWnJfalxZLAA+ZxjJdGSTT7Gj6AFXl6RTYm6PdT9ODKTJx7cWzoXQa7n2M155X0V5FbrtinFgZAEvUMGeJPtlU/hn3eTIgAAAAAAAAAm6RTC/NjGxbxUXLbzAA0yAAA6AAAAAAAAAAAAAAAAAB5X1QvqnXZHeLMlNdGbS79jgA4AAAAA//9k="
    },
    {
        id: 4, 
        image: "https://www.miamiherald.com/latest-news/13hc16/picture293604259/alternates/LANDSCAPE_1140/2000x2000.jpg",
        title: "Hurricane Milton: Category 5 Powerhouse",
        content: "Hurricane Milton, the fourth strongest hurricane in Atlantic history, has rapidly intensified into a catastrophic Category 5 storm with sustained winds of 180 mph, posing an unprecedented threat to Florida's Gulf Coast. As reported by CBS News, Milton's explosive strengthening from a tropical storm to a Category 5 hurricane in just 36 hours has set records, fueled by unusually warm Gulf waters and raising concerns about the impact of climate change on hurricane intensity.",
        postedBy: "elymc",
        profileImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAQMC/8QAOhAAAgIBAgIHBQUGBwAAAAAAAAECAwQFESExEiJBUVJhcRMjMpHBQnKBobEGFGKCkvAVMzRTc6Lh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN6AAAAAAAAAdSbaSTbfLYDh9VwnZLo1xcn3Jblrg6O5pTy24rsguf4lzVTXTBQqioryAz9Wj5di3ko1r+J8SVDQvHf8olzsAKh6DX2XS39EeVmhTS6l0X95bF4AMxfpuXTu5VdJd8OJD+nM2ZGysHHyl7yHW8S4MDKriCbnaddidf46vEuz1RCAAAAAAAAAAAAAAAAAAADsYuclCCbk3wSNFpunRxkp2da5/wDX0PLRcFVwWRbHryXV37EWoAAAAAAAAAAAcaTTTW6ZRarpvsU78ePU+1Hw+ZfHHtts1wAxoJ2rYX7rd0oL3U+K8n3EEAAAAAAAAAAAAAAErTsb96yoQ26qe8vQi7l7oNKjRO185vZPyQFsuQAAA6AOA6AOA6AOA6AOA6AI2bjrJx51Pm1vF9zMq04txktmuDNmZnWafZZ0tlsppS+gEEAAAAAAAAAAAAA32TNVp0PZ4NEV4d/nxMq+Rr8fhj1fcX6AegAA6AAAAAAAAAAAAAFL+0UOrRYue7j+W5dFV+0P+lq/5PowKAAAAAAAAAAAAAAfFGtwp+0w6ZLtgv0MkaLRLVPCUO2tuP1AsQAB0AAAAAAAAAAAAAKj9ope5ph2ue/5f+luZ/X7elmQrXKEePq/7QFWAAAAAAAAAAAAAFjomR7LK9nL4bOH4lcdT2aa4NPfcDZAiadlrLx+k9unHhJeZLA6AAAAAAAAAAAAA+LZquuU5cordmSvtd107Jc5Pcttdy99sauXnNr9ClAAAAAAAAAAAAAAAAA98PJni3qyH8y70afGvryKlZXLdP8AIyJ74uVZiWe0qfP4k+TA1oIeFqFOUtovozXOD5kwAAAAAAAHG0lu+QHSv1TPjiw6FbTulyXh82eOoavCCdeLtKfj7EUU5OcnKTbk3u2+bASblJyk22+Lb7TgAAAAAAAAAAAAAAAAAADt4kmnByb+NdT6PfLggI64cVwfeT8bVsihbS2tivFz+ZFyMa7GltdBx7n2P8TxA0NOtY00vaKdb81uvmSo5+LLlfX8zKADWvLx1zur/qR5z1LEhzui/TiZYAXt+uVrdU1Sk++XBFXk52Rk7+0s2j4Y8ERgA7AS6NOybo9OFbUezpcNzxuotofva5Q9eQHkDrOAAAAAAAAAAAAAAAm4WnXZe0tnCvf4n2+hK0rSlJK7JjwfGNb+peR4JLkBExdPx8ZbqHSl4pcWTAAPmUVKO0opruaIN+kYtrbjF1v+F8PkWAAobNDs391dF+UlseL0jMX2YP0kaQAZn/Cs3/aX9SPuGjZcvi6Ef5jRgClq0Pb/ADrt/uIn4+n41GzhWnJfalxZLAA+ZxjJdGSTT7Gj6AFXl6RTYm6PdT9ODKTJx7cWzoXQa7n2M155X0V5FbrtinFgZAEvUMGeJPtlU/hn3eTIgAAAAAAAAAm6RTC/NjGxbxUXLbzAA0yAAA6AAAAAAAAAAAAAAAAAB5X1QvqnXZHeLMlNdGbS79jgA4AAAAA//9k="
    }
]



class Discover extends Component {
    state = {condition : true, feedDetails : null}
    handleClick = (feed) => {
        this.setState({condition : false, feedDetails : feed})
    }
    render() {
        const {condition,feedDetails} = this.state;
        return (
            condition === true ?
            <div  className="discover-bg-container">
                
                <div id="maincontainer" className="main-container text-left">
                    <div id="discover">
                    <h1>Discover</h1>    
                    <nav className='discover-nav-bar'>
                        <a className="discover-nav-item">Top</a>
                        <a className="discover-nav-item">Tech &amp; Science</a>
                        <a className="discover-nav-item">Finance</a>
                        <a className="discover-nav-item">Arts &amp; Culture</a>
                        <a className="discover-nav-item">Sports</a>
                        <a className="discover-nav-item">Entertainment</a>
                    </nav>
                    <div className="feeds-container">
                        {feedsData.map(feed => {
                            if (feed.id % 4 === 0) {
                                return <BigFeed key={feed.id} feed={feed} onClick={()=>this.handleClick(feed)}/>
                            } else {
                                return <Smallfeed key={feed.id} feed={feed} onClick={()=>this.handleClick(feed)}/>
                            }
                        })}
                    </div>
                    </div>
                </div>
            </div>
            :
            <div className='feedpage-bg-container'>
                <FeedPage feed={feedDetails}/>
                
            </div>
            
            
        )
    }
}

    




export default Discover
